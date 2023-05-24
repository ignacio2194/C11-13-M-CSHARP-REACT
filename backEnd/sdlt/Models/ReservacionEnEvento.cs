using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace sdlt.Models
{
    [Table("ReservacionEnEvento")]
    public class ReservacionEnEvento
    {
        [Key]
        public int? ReservacionEnEventoId { get; set; }
        [ForeignKey("Evento")]
        public virtual int? EventoId { get; set; }
        [ForeignKey("EventoId")]
        [JsonIgnore]
        public virtual Evento Evento { get; set; }
        [ForeignKey("Reserva")]
        public virtual int? ReservaId { get; set; }
        [ForeignKey("ReservaId")]
        [JsonIgnore]
        public virtual Reserva Reserva { get; set; }
        public decimal? Precio { get; set; }
        public int? Stock { get; set; }
    }
}