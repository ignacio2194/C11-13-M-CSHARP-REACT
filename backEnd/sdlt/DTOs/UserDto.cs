using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace sdlt.DTOs
{
    public class UserDto
    {
        public string Id { get; set; }

        [StringLength(256)]
        public string Email { get; set; }
        public bool? EmailConfirmed { get; set; }
        [JsonIgnore]
        public string PasswordHash { get; set; }

        public string SecurityStamp { get; set; }

        public string PhoneNumber { get; set; }

        public bool? PhoneNumberConfirmed { get; set; }

        public bool? TwoFactorEnabled { get; set; }

        public DateTime? LockoutEndDateUtc { get; set; }

        public bool? LockoutEnabled { get; set; }

        public int? AccessFailedCount { get; set; }

        [Required]
        [StringLength(256)]
        public string UserName { get; set; }

        [StringLength(200)]
        public string Direccion { get; set; }

        [StringLength(10)]
        public string CodigoPostal { get; set; }

        [StringLength(400)]
        public string Reseña { get; set; }
        public string ImagenUrl { get; set; }
        public string NombreApellido { get; set; }
        public string RoleId { get; set; }

    }
}