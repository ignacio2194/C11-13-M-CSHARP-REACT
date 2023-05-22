namespace sdlt.Models
{
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
        public int OrdenId { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int MenuItemId { get; set; }

        public int? Cantidad { get; set; }

        public decimal? PrecioUnitario { get; set; }

        public virtual MenuItem MenuItem { get; set; }

        public virtual OrdenDelivery OrdenDelivery { get; set; }
    }
}
