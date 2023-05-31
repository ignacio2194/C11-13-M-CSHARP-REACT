using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace sdlt.Models
{
    public class ActivacionEventoDto
    {
        public virtual int? EventoId { get; set; }
        public virtual int? RestauranteId { get; set; }
        public virtual int? Stock { get; set; }
        public virtual decimal Precio { get; set; }
    }
}