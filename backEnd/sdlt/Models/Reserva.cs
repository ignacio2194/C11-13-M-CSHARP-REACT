namespace sdlt.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Reserva")]
    public partial class Reserva
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int? ReservaId { get; set; }

        public DateTime FechaHora { get; set; }
        public decimal? Precio { get; set; }
        public virtual int? Cantidad { get; set; }

        [StringLength(128)]
        [ForeignKey("AspNetUsers")]
        public string UserId { get; set; }
        [ForeignKey("Evento")]
        public int? EventoId { get; set; }
        [JsonIgnore]
        [ForeignKey("EventoId")]
        public Evento Evento { get; set; }
        [JsonIgnore]
        [ForeignKey("UserId")]
        public virtual User AspNetUsers { get; set; }
    }
}
