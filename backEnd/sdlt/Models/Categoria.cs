namespace sdlt.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Categoria")]
    public partial class Categoria
    {
        public Categoria()
        {
            Comida = new HashSet<Comida>();
        }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int CategoriaId { get; set; }
        [Required]
        [StringLength(75)]
        public string Descripcion { get; set; }
        [StringLength(400)]
        public string ImagenUrl { get; set; }
        [JsonIgnore]
        public virtual ICollection<Comida> Comida { get; set; }
    }
}
