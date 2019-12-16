# 设置 flask 在 DEBUG 模式下

set FLASK_ENV=development
或者
set FLASK_DEBUG=1
只有在 development 模式下，才会响应代码的改变
设置项目可被其他机器访问
flask 默认只能本机访问，要让网络上其他机器访问，需要增加 host 为 0.0.0.0

[flask 官网原文：](http://flask.pocoo.org/docs/0.12/quickstart/#a-minimal-application)

Externally Visible Server
If you run the server you will notice that the server is only accessible from your own computer, not from any other in the network. This is the default because in debugging mode a user of the application can execute arbitrary Python code on your computer.
If you have the debugger disabled or trust the users on your network, you can make the server publicly available simply by adding --host=0.0.0.0 to the command line:
flask run --host=0.0.0.0
This tells your operating system to listen on all public IPs.
也可以这样：
app.run(host="0.0.0.0", port=80)
FLASK 的 Jinjia 模板
变量表示
{{argv}}

赋值操作

```python
{% set links = [
    ('home',url_for('.home')),
    ('service',url_for('.service')),
    ('about',url_for('.about')),
] %}
```

```python
if 判断
{% if not loop.first %}|{% endif %}
```

```python
for 循环
{% for label,link in links %}
{% if not loop.first %}|{% endif %}
<a href="{{ link }}">{{ label }}</a>
{% endfor %}
```

定义函数
 loop.first  就是一个测试函数，这个我们也可以自定义
定义是在 Sample.py  里定义的，current_link 是 HTML 中可使用测试函数名称（可选）
@app.template_test('current_link')
def is_current_link(link):
return link == request.path

在 HTML 中使用

```html
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
```
