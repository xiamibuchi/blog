一般Laravel切换数据库链接只能在 config/database.php 中写好再调用，但如果数据库名不确定该如何动态创建呢？

```php
<?php

namespace App\Utils;

use MongoDB\Client;
use Symfony\Component\VarDumper\VarDumper;

$url = 'mongodb://127.0.0.1/';

class Mongo
{
        static function find(string $url = 'mongodb://127.0.0.1/', string $database, string $collection) {
                $collection = self::connect($url, $database, $collection);
                $res = $collection->find();
                if (!$res || is_array($res)) {
                        return [];
                }

        $res = $res->toArray();
        foreach ($res as &$ele) {
                if (!$ele) {
                        continue;
                }
                $ele = (array)$ele;
        }
        return $res;
        }

        private static function connect(string $url, string $database, string $collection) {
                $client=new Client($url);
                $db=$client->selectDatabase($database);
                $collection=$db->selectCollection($collection);
                return $collection;
        }
}
```
