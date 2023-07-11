from .settings import *
import os

SECRET_KEY = os.environ.get("SECRET_KEY")
# Desactivar el modo de depuración
DEBUG = False
# Configurar el nombre de host permitido
ALLOWED_HOSTS = [
"BackendPPrincipal",
"127.0.0.1",
"vauless.ugc.edu.co",
"testvauless.ugc.edu.co"
]
CSRF_COOKIE_SECURE = True  # Asegurar la cookie CSRF
SESSION_COOKIE_SECURE = True  # Asegurar la cookie de sesión
X_FRAME_OPTIONS = "DENY"  # Denegar el acceso a otros dominios
# evitar ataques de falsificación de solicitudes entre sitios (CSRF),
# permite que Django confíe en los encabezados de solicitud enviados por los orígenes confiables
CSRF_TRUSTED_ORIGINS = [
"http://127.0.0.1",
"https://vauless.ugc.edu.co",
"http://testvauless.ugc.edu.co",

]
# controla qué orígenes tienen acceso a los recursos de la aplicación
CORS_ALLOW_ALL_ORIGINS = [

"http://127.0.0.1",
"https://vauless.ugc.edu.co",
"http://testvauless.ugc.edu.co",
]
STATIC_URL = "/pprincipal/static/" # ruta para los static que pide el navegador
STATIC_ROOT = os.path.join(BASE_DIR, "static")  # soluciona la ruta de la url aquí 
# Configurar el almacenamiento de archivos de medios
MEDIA_URL = "/pprincipal/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")
