using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace sdlt.DTOs
{
    public class ReservacionDto
    {
        public virtual DateTime FechaHora { get; set; }
        public virtual decimal? Precio { get; set; }
        //public virtual string UserId { get; set; }
        public virtual int? Cantidad { get; set; }
        public virtual int? EventoId { get; set; }
    }
}