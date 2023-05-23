using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;
using sdlt.Infrastructure;

[assembly: OwinStartup(typeof(sdlt.Startup))]

namespace sdlt
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
        private void ConfigureOAuthTokenGeneration(IAppBuilder app)
        {
            // Configure the db context and user manager to use a single instance per request
            //Rest of code is removed for brevity
            app.CreatePerOwinContext<ApplicationRoleManager>(ApplicationRoleManager.Create);
            //Rest of code is removed for brevity
        }
    }
}
