using Newtonsoft.Json;
using sdlt.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace sdlt.DTOs
{
    public class ReservaOutDto
    {

        [Key]
        public int? ReservaId { get; set; }

        public DateTime FechaHora { get; set; }
        public decimal? Precio { get; set; }
        public virtual int? Cantidad { get; set; }

        [StringLength(128)]
        [ForeignKey("AspNetUsers")]
        public string User { get; set; }
        [ForeignKey("Evento")]
        public int? EventoId { get; set; }
        public string Evento { get; set; }
        
        
    }
}