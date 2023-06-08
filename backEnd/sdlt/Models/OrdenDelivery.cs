namespace sdlt.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("OrdenDelivery")]
    public partial class OrdenDelivery
    {
        public OrdenDelivery()
        {
            DetalleOrdenDelivery = new HashSet<DetalleOrdenDelivery>();
        }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int OrdenId { get; set; }

        public int? NroOrden { get; set; }

        [Column(TypeName = "date")]
        public DateTime? Fecha { get; set; }

        [StringLength(128)]
        public virtual string ClienteId { get; set; }

        public int? RestauranteId { get; set; }
        [JsonIgnore]
        [ForeignKey("ClienteId")]
        public virtual User AspNetUser { get; set; }
        [JsonIgnore]
        [ForeignKey("RestauranteId")]
        public virtual Restaurante Restaurante { get; set; }
        [JsonIgnore]
        public virtual ICollection<DetalleOrdenDelivery> DetalleOrdenDelivery { get; set; }
    }
}
