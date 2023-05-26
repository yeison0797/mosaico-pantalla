from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets

from .serializer import *
from django.http import HttpResponse
from django.shortcuts import get_object_or_404

# Create your views here.

def image_view(request, pk):

    foto = get_object_or_404(Dependencia, pk=pk)
    if foto.imagen:
        print(foto.imagen.path)
        with open(foto.imagen.path, 'rb') as f:
            return HttpResponse(f.read(), content_type='image/jpeg')
    # return FileResponse(open("./media/fotos/WIN_20220923_17_48_08_Pro.jpg", 'rb'), content_type='image/jpeg')

    # if os.path.exists(image_path):
    #     return FileResponse(open(image_path, 'rb'), content_type='image/jpeg')
    else:
        return HttpResponse({}, status=404)
    
class DependenciaViewSet(viewsets.ModelViewSet):# Lista los objetos con ListAPIVIEW
    serializer_class = DependenciaSerializer
    ordering_fields = '__all__'
 
    # permission_classes = [CustomDjangoModelPermission]
    
   
    def get_queryset(self,pk=None):
        model=self.get_serializer().Meta.model.objects # Recoje la informacion del modelo que aparece en el meta de los serializer
        if pk is None:
            return model.filter()
 
        return model.filter(id=pk).first() # retorna todos los valores con estado = true