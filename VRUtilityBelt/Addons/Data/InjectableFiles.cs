﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VRUtilityBelt.Addons.Data
{
    class InjectableFiles
    {
        [JsonProperty("js")]
        public List<string> JS = null;

        [JsonProperty("css")]
        public List<string> CSS = null;
    }
}