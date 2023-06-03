using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace sdlt.Controllers
{
    public class ProductoPagoDto
    {
        public string Nombre { get; set; }
        public decimal Precio { get; set; }
        public int? cantidad { get; set; }
    }
}