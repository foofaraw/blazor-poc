using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorPinUpBoard
{
    public class Card
    {
        private static int _count = 0;

        public bool IsInitialized { get; set; }

        public string Title { get; set; }

        public string Text { get; set; }

        public string TitleElementId { get; private set; }

        public string TextElementId { get; private set; }

        public Card()
        {
            TitleElementId = $"card-title-{_count}";
            TextElementId = $"card-text-{_count}";

            Title = DateTime.Now.ToString();
            Text = DateTime.Now.ToString();
            _count++;
        }        
    }
}
