﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace sdlt.DTOs
{
    public class ProductOutDto
    {
        public int? ProductoId { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public decimal Precio { get; set; }
        public int? CategoriaId { get; set; }
        public string Categoria { get; set; }
        public int? Stock { get; set; }
        public bool EstaActivo { get; set; }
 
    }
}