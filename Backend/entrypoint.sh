python manage.py makemigrations --noinput
python manage.py makemigrations apiBackendPantallaPrincipalApp --noinput
python manage.py migrate --noinput
python manage.py collectstatic --noinput


gunicorn  apiBackendPantallaPrincipal.wsgi:application --env \
    DJANGO_SETTINGS_MODULE=apiBackendPantallaPrincipal.settings_production\
    --bind 0.0.0.0:8000 \
    --workers 4 \
    --log-level=info --timeout 300 --access-logfile - &
sleep 5s
service nginx start
