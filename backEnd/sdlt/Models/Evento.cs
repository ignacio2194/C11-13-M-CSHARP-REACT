namespace sdlt.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Evento")]
    public partial class Evento
    {
        public Evento()
        {
            Reserva = new HashSet<Reserva>();
        }
        public int EventoId { get; set; }

        [StringLength(65)]
        public string Nombre { get; set; }

        [StringLength(100)]
        public string Descripcion { get; set; }

        [StringLength(200)]
        public string ImagenUrl { get; set; }
        [ForeignKey("Restaurante")]
        public virtual int? RestauranteId { get; set; }
        public int? Stock { get; set; }
        public virtual decimal? Precio { get; set; }
        [ForeignKey("RestauranteId")]
        [JsonIgnore]
        public virtual Restaurante Restaurante { get; set; }
        [JsonIgnore]
        public virtual ICollection<Reserva> Reserva { get; set; }
    }
}
