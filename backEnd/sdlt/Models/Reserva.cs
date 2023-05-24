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
        public Reserva()
        {
            ReservacionEnEvento = new HashSet<ReservacionEnEvento>();
        }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int? ReservaId { get; set; }

        public DateTime FechaHora { get; set; }

        public decimal? Precio { get; set; }

        [StringLength(128)]
        [ForeignKey("AspNetUsers")]
        public string UserId { get; set; }

        [JsonIgnore]
        [ForeignKey("UserId")]
        public virtual User AspNetUsers { get; set; }

        [JsonIgnore]
        public virtual ICollection<ReservacionEnEvento> ReservacionEnEvento { get; set; }
    }
}
