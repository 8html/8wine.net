8WINE.NET
=========

8WINE Shop Application.

NGINX
-----

    server {
      server_name <SERVER_NAME>;
      return 301 http://www.<SERVER_NAME>$request_uri;
    }

    upstream 8wine_net_app {
      server unix:///srv/apps/8wine.net/tmp/sockets/node.socket;
    }

    server {
      listen 80;
      server_name www.<SERVER_NAME>;
      client_max_body_size 1m;
      keepalive_timeout 5;
      root /srv/apps/8wine.net/public;
      access_log /srv/apps/8wine.net/log/production.access.log;
      error_log /srv/apps/8wine.net/log/production.error.log info;
      error_page 500 502 503 504 /500.html;
      location = /500.html {
        root /srv/apps/8wine.net/public;
      }
      try_files $uri/index.html $uri.html $uri @app;
      location @app {
        proxy_intercept_errors on;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_redirect off;
        proxy_pass http://8wine_net_app;
      }
    }

Developers
----------

* caiguanhao &lt;caiguanhao@gmail.com&gt;
