namespace sdlt.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DetalleOrdenDelivery")]
    public partial class DetalleOrdenDelivery
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [ForeignKey("OrdenDelivery")]
        public int? OrdenId { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [ForeignKey("Producto")]
        public int? ProductoId { get; set; }

        public int? Cantidad { get; set; }

        public decimal? PrecioUnitario { get; set; }
        [JsonIgnore]
        [ForeignKey("ProductoId")]
        public virtual Producto Producto { get; set; }
        [JsonIgnore]
        public virtual OrdenDelivery OrdenDelivery { get; set; }
    }
}
