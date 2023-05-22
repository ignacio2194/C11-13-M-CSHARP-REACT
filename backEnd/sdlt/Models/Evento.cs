namespace sdlt.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Evento")]
    public partial class Evento
    {
        public int EventoId { get; set; }

        [StringLength(65)]
        public string Nombre { get; set; }

        [StringLength(100)]
        public string Descripcion { get; set; }

        [StringLength(200)]
        public string ImagenUrl { get; set; }

        public int? MenuId { get; set; }

        public int? ReservaId { get; set; }

        public int? RestauranteId { get; set; }

        public virtual Reserva Reserva { get; set; }

        public virtual Restaurante Restaurante { get; set; }
    }
}
