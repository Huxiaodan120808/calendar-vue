<template>
  <div class="calendar-container">
    <vue-fullcalendar
      class="calendar"
      :options="options"
      :resources="resources"
      :events="events">
    </vue-fullcalendar>
    <!--<button type="primary" @click="updateOptions">updateOptions</button>-->
    <!--<button class="flex1 blueFontColor" @click="updateOptions">changeResources</button>-->
    <!--<button class="flex1 blueFontColor" @click="changeEvents">changeEvents</button>-->
    <button style="float: left;margin-bottom: 10px;" @click="$router.go(-1)">返回</button>
  </div>
</template>
<script>
import VueFullcalendar from './calendar'
export default {
  name: 'occupyRoom',
  components: {
    VueFullcalendar
  },
  data () {
    return {
      options: {
        locale: 'en-cn',
        scrollTime: '10:00',
        editable: false,
        selectable: false,
        allDaySlot: false,
        defaultView: 'agendaDay',
        eventResourceField: 'room',
        slotLabelFormat: 'HH:mm',
        header: false,
        height: 500,
        resourceColumns: [
          {
            labelText: 'Room',
            field: 'title'
          }
        ]
      },
      resources: [{
        id: 1,
        title: 'Room A',
        eventColor: '#58a1f596'
      }],
      events: [{
        id: 1,
        room: 1,
        title: 'Meeting',
        start: '2018-10-31 10:00',
        end: '2018-10-31 11:00'
      }, {
        id: 2,
        room: 1,
        title: '测试',
        start: '2018-10-31 12:30',
        end: '2018-10-31 14:30'
      }]
    }
  },
  created: function () {
  },
  watch: {
  },
  methods: {
    updateOptions () {
      this.options = {
        locale: 'zh-cn',
        editable: true,
        selectable: false,
        droppable: true,
        handleWindowResize: true,
        slotEventOverlap: false,
        slotLabelFormat: 'HH:mm',
        header: false
      }
    },
    changeResources () {
      this.resources = [{
        id: 1,
        title: 'Room A'
      }, {
        id: 2,
        title: 'Room B'
      }, {
        id: 3,
        title: 'Room C'
      }, {
        id: 4,
        title: 'Room D'
      }]
    },
    changeEvents () {
      this.events = [{
        id: 1,
        room: 1,
        title: 'Meeting',
        start: '2018-06-28 10:00'
      }, {
        id: 2,
        room: 2,
        title: '测试',
        start: '2018-06-28 12:00'
      }, {
        id: 3,
        room: 3,
        title: '测试',
        start: '2018-06-28 08:00'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .external-events {
    position: fixed;
    z-index: 2;
    top: 120px;
    left: 20px;
    width: 150px;
    padding: 0 10px;
    border: 1px solid #ccc;
    background: #eee;
  }
  .calendar-container {
    width: 100%;
    height: 900px;
  }
  .calendar {
    width: 100%;
    margin: 20px auto;
  }
</style>
