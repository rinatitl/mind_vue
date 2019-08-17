const eventstoggle = Vue.component('eventstoggle' , {
    template:   `<div class="vue_wrapper"><div class="events_type lg_margin_b">
                    <a v-on:click="newEvents" v-bind:class="newActive">Предстоящие</a>
                    <a v-on:click="oldEvents" v-bind:class="oldActive">Прошедшие</a>
                </div>

                <section class="new_events" v-show="isNew">
                    <div class="one_event md_margin_b">
                        <h3 class="sm_margin_b">Лекция по кибербезопасности</h3>
                        <span class=""></span>
                        <div class="datetag sm_margin_b">    
                            <img src="assets/icons/date.png" class="datetag_img" alt="">
                            <span>14.08.2019</span>
                        </div>
                        <div class="timetag sm_margin_b">    
                            <img src="assets/icons/clock.png" class="geotag_img" alt="">
                            <span>19:00</span>
                        </div>
                        <div class="geotag">    
                            <img src="assets/icons/geotag.png" class="geotag_img" alt="">
                            <span>актовый зал</span>
                        </div>
                    </div>
                </section>

                <section class="old_events" v-show="!isNew">
                    <div class="one_event md_margin_b">
                        <h3 class="sm_margin_b">Event 4</h3>
                        <div class="datetag sm_margin_b">    
                            <img src="assets/icons/date.png" class="datetag_img" alt="">
                            <span>15.08.2019</span>
                        </div>
                        <div class="timetag sm_margin_b">    
                            <img src="assets/icons/clock.png" class="geotag_img" alt="">
                            <span>10:00</span>
                        </div>
                        <div class="geotag">    
                            <img src="assets/icons/geotag.png" class="geotag_img" alt="">
                            <span>аудитория 325</span>
                        </div>
                    </div>
                </section></div>`,
    data() {
        return {
            isNew: true,
            newActive: 'active',
            oldActive: ''
        };
    },
    methods : {
        newEvents : function(e) {
            this.isNew = true;
            this.newActive = 'active';
            this.oldActive = '';
        },
        oldEvents : function(e) {
            this.isNew = false;
            this.newActive = '';
            this.oldActive = 'active';
        }
    }

});