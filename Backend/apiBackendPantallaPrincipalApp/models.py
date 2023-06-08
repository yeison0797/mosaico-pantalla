from django.db import models

# Create your models here.
class Dependencia(models.Model):
    id = models.AutoField(primary_key=True, unique=True) # los modelos que apliquen baseModels tendran estos dos campos
    imagen = models.ImageField(upload_to="imagenes",blank=False,null=False)
    color = models.CharField(max_length=15, blank=True, null=True)
    nombre= models.CharField(max_length=50,blank=False, null=False,unique=True)  
    url= models.CharField(max_length=15,blank=True, null=True)  
    class Meta:
        verbose_name = ("Dependencia")
        verbose_name_plural = ("dependencias")
        db_table='Dependencia'
        ordering =['nombre']

    def __str__(self):
        return self.nombre
