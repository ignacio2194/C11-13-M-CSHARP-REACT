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

    }
}