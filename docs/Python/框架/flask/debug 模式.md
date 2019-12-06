设置flask在DEBUG模式下
set FLASK_ENV=development
或者
set FLASK_DEBUG=1
只有在development模式下，才会响应代码的改变
设置项目可被其他机器访问
flask默认只能本机访问，要让网络上其他机器访问，需要增加host为0.0.0.0
flask官网原文(http://flask.pocoo.org/docs/0.12/quickstart/#a-minimal-application)：
Externally Visible Server
If you run the server you will notice that the server is only accessible from your own computer, not from any other in the network. This is the default because in debugging mode a user of the application can execute arbitrary Python code on your computer.
If you have the debugger disabled or trust the users on your network, you can make the server publicly available simply by adding --host=0.0.0.0 to the command line:
flask run --host=0.0.0.0
This tells your operating system to listen on all public IPs.
也可以这样：
app.run(host="0.0.0.0", port=80)
FLASK的Jinjia模板
变量表示
{{argv}}

赋值操作
{% set links = [
    ('home',url_for('.home')),
    ('service',url_for('.service')),
    ('about',url_for('.about')),
] %}

if判断
{% if not loop.first %}|{% endif %}

for循环
{% for label,link in links %}
     {% if not loop.first %}|{% endif %}
     <a href="{{ link }}">{{ label }}</a>
{% endfor %}

定义函数
 loop.first 就是一个测试函数，这个我们也可以自定义
定义是在Sample.py 里定义的，current_link是HTML中可使用测试函数名称（可选）
@app.template_test('current_link')
def is_current_link(link):
    return link == request.path

在HTML中使用
<body>
{% set links = [
    ('home',url_for('.home')),
    ('service',url_for('.service')),
    ('about',url_for('.about')),
] %}

<nav>
    {% for label,link in links %}
        {% if not loop.first %}|{% endif %}
        <a href="{% if link is current_link %}#
        {% else %}
        {{ link }}
        {% endif %}
        ">{{ label }}</a>
    {% endfor %}
</nav>
</body>

块block
Flask强大的地方就可以引用模板，而且非常方便。
这里不得不介绍block这个概念。

模板的文件一般放在templates文件夹下，我们这里新建一个HTML文件，存放模板，'base.html'
在这里面也，编排了整个页面的排版，里面会用到很多block的占位符。
每个block都代表一段html语句块，而这些块在哪里定义呢，可以在当前的base.html中定义，也可以在别的html中定义。反正要有一处定义，没有定义块只是没有效果而已
定义的时候，home.html 顶部必须说明继承关系(如果py文件链接的是home.html，但home.html引用了base.html的模板，就要说明)
{% extends 'base.html' %}
块的定义格式，endblock 后面块名可以省略，有时候加上会让结构更加明晰
{% block 块名 %}
    块内容
{% endblock (块名)%}
定义了块之后，base.html中对应的块，就会被这些块内容覆盖。
块覆盖的情况
有一种情况，base.html中定义了block B 块内容1，但是在home.html也定义block B 块内容2，注意这时会优先显示内容2，因为把内容1覆盖了。
理解起来，就是base.html是通用模板，我们可以直接引用过来，没有问题，但是也可以自定义块，修改通用模板的内容，达到我们想要的效果。
还有一种情况，我们既不想不覆盖通用模板的内容，又想在其基础上，增加一些东西，这也是可以的。
举个例子：在base.html中
<footer>
    {% block footer %}
    <p>Posted:Bikmin</p>
        <p>Contact with:<a href="someone@example.com">someone@example.com</a> </p>
    {% endblock %}
</footer>
如果我们不再自定义块，就会使用base.html通用模板的内容，效果如下

觉得这个模板还行，不想覆盖，还想在这个基础上再添加些东西，想要上面添加一条水平线作为分隔符，该怎么做呢
做法是，也是在home.html重新定义块，但是需要用到super()函数
{% block footer %}
    <hr>
    {{ super() }}
{% endblock %}
{{ super() }} 就表示了通用模板里的内容
 
在一个项目HTML中，块被定义多次，是会被覆盖的。
有时候，我们想引用块的内容，又不想写一串很长的块内容，这时候可以用下面的语法，不管在哪个html文件里定义的都可以，只要有继承关系
{{ self.块名() }}

包含页
如果有一些HTML代码是经常用到的固定的，为了避免整个HTML文档看起来很拥挤，内容嘈杂。
可以将这一部分的代码，保存为了一个HTML模板，然后要用的时候，再用
{% include 'includes/_head.html' %}
包含的方法引用过来，引号里是路径，includes是templates下的一个文件夹，这个看你放在哪里，就填哪里的路径了

宏macro
Flask中到处都是模板，仔细想想Python中的函数不也像是模板吗？只要输入参数，就可以实现特定的功能。
所以Jinjia里当然少不了。
	• 宏的定义（举个例子）
下面定义一个<input/>的函数，通过做成宏，可以将一些参数修改成我们想要的默认值，然后调用的时候就像函数一样调用，很方便。
{# 定义宏 #}
{% macro input(name,value='',type='text',size=20) %}
    <input type="{{ type }}"
        name="{{ name }}"
        value="{{ value }}"
        size="{{ size }}"/>
{% endmacro %}
	• 宏的调用
{{ input('username') }}
{{ input('password',type='password') }}
	• 宏的集合做成库
宏跟函数差不多，Python的函数可以封装在库里，那么是不是也可以将很多宏集合在一起（一个HTML中）,要用的时候像调用库函数一样import使用呢？
答案是当然可以的。这个做法还有一个好处，就是让我们的主HTML文件，内容更加简练。节省空间，可读性更强。
下面我们举例将一个macro放在'_macro.html'中
然后如何引入到我们的文件里呢
{% import '_macro.html' as ui %}
这里注意，必须要加 as 库名 ，不然我们引用函数的时候，都不知道从哪里来的函数
调用的方式也有点改变，如下
{{ ui.input('username') }}
{{ ui.input('password',type='password') }}
是不是跟Python的使用函数一模一样？

小项目实战
#Sample.py

# coding:utf-8
from flask import Flask,render_template,request,url_for
app = Flask(__name__)
@app.route('/')
def home():
    return render_template('home.html',title_name = 'welcome')
@app.route('/service')
def service():
    return 'service'
@app.route('/about')
def about():
    return 'about'
@app.template_test('current_link')
def is_current_link(link):
    return link == request.path
if __name__ == '__main__':
    app.run(debug=True)

#home.html

{% extends 'base.html' %}
{% import '_macro.html' as ui %}
{% block title %}{{ title_name }}{% endblock %}
{% block content %}
{% set links = [
    ('home',url_for('.home')),
    ('service',url_for('.service')),
    ('about',url_for('.about')),
] %}
<nav>
    {% for label,link in links %}
        {% if not loop.first %}|{% endif %}
        <a href="{% if link is current_link %}#
        {% else %}
        {{ link }}
        {% endif %}
        ">{{ label }}</a>
    {% endfor %}
</nav>
    <p>{{ self.title() }}</p>
    {{ ui.input('username') }}
    {{ ui.input('password',type='password') }}
{% endblock content %}
{% block footer %}
    <hr>
    {{ super() }}
{% endblock %}

#base.html

<!DOCTYPE html>
<html lang="en">
<head>
    {% block head %}
        {% include 'includes/_head.html' %}
    {% endblock %}
</head>
<body>
    <header>{% block header %}{% endblock %}</header>
    <div>{% block content %}<p>hello</p>{% endblock %}</div>
{% for item in items %}
        <li>{% block loop_item scoped %}{{ item }}{% endblock %}</li>
    {% endfor %}
<footer>
        {% block footer %}
        <p>Posted:Bikmin</p>
            <p>Contact with:<a href="someone@example.com">someone@example.com</a> </p>
        {% endblock %}
    </footer>
</body>
</html>

#_head.html
<meta charset="UTF-8">
<link href="{{ url_for('static',filename='site.css') }}" rel="stylesheet">
<title>{% block title %}{% endblock %}</title>
#macro

{# 定义宏 #}
{% macro input(name,value='',type='text',size=20) %}
    <input type="{{ type }}"
        name="{{ name }}"
        value="{{ value }}"
        size="{{ size }}"/>
{% endmacro %}

运行项目


来自 <https://www.cnblogs.com/wongbingming/p/6807771.html> 


