const sidebar = Vue.component('sidebar', {
    template : `<div id="sidebar" :class="{ 'sidebar_open' : sidebarOpen  }">
                    <div id="sidebar_toggle" @click="sidebarToggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div id="page_links">
                        <ul>
                            <li><a href="index.html" class="profile_link"></a></li>
                            <li><a href="voting.html" class="voting_link"></a></li>
                            <li><a href="events.html" class="events_link"> </a></li>
                            <li><a href="balance.html" class="balance_link"></a></li>
                            <li><a href="timetable.html" class="timetable_link"></a></li>
                            <li><a href="marks.html" class="marks_link"></a></li>
                            <li><a href="ask.html" class="ask_link"></a></li>
                            <li><a href="docs.html" class="docs_link"></a></li>
                        </ul>
                    </div>
                    <div class="sidebar_mask" :class="{ visible : maskVisible }" @click='sidebarClose'></div>
                </div>`,
    data() {
        return {
            sidebarOpen : false,
            maskVisible: false
        };
    },
    computed : {
    },
    methods : {
        sidebarToggle : function() {
            this.sidebarOpen = !this.sidebarOpen;
            if (this.sidebarOpen) {
                setTimeout(() => {
                    this.maskVisible = true;
                }, 300);
            }
            else {
                this.maskVisible = false;
            }
        },
        sidebarClose : function() {
            this.sidebarOpen = false;
            this.maskVisible = false;
        }
    }
});