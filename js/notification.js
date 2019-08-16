const options = Vue.component('options', {
    template : `<ul class="options">
                    <li class="notification_toggle" :class="{ 'option_open' : noteOpen }" @click="noteToggle">
                        <div class="note_cont" @mouseleave="noteContClose" @mouseover="noteContNoClose">
                            
                        </div>
                    </li>
                    <li class="settings"><a href="/settings"></a></li>
                    <li class="lang_toggle lang_rus" id="lang_toggler">

                    </li>
                </ul>`,
    data() {
        return {
            noteOpen : false,
            noteContTimeout : null,
            langs_list : [
                {
                    id : 'rus',
                    class : 'lang_rus'
                },
                {
                    id : 'tat',
                    class : 'lang_tat'
                },
                {
                    id : 'eng',
                    class : 'lang_eng'
                }
            ]
        };
    },
    computed : {
    
    },
    methods : {
        noteToggle : function() {
            this.noteOpen = !this.noteOpen;
        },
        noteContClose : function() {
            var self = this;
            noteContTimeout = setTimeout(function () {
                self.noteOpen = false;
            }, 2000)
        },
        noteContNoClose : function() {
            clearTimeout(this.noteContTimeout);
        }
    }
});