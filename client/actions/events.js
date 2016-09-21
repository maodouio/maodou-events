import { browserHistory } from 'react-router'

export default {
  /**** User Actions ****/

  /**** Admin Actions ****/
  addEvent({ Meteor, swal }, event) {
    return () => {
      event.preventDefault();
      const title = event.target.title.value;
      const coverUrl = 'url'; // TODO
      const time = event.target.time.value;
      const location = event.target.location.value;
      const limit = event.target.limit.value;
      const unit = event.target.unit.value;
      const fee = event.target.fee.value;
      const desc = $('#editor').summernote('code');
      Meteor.call('events.add', title, coverUrl, time, location, limit, unit, fee, desc, (err) => {
        if (err) {
          swal({
            title: '发布失败',
            text: err.message,
            type: 'error'
          });
        } else {
          swal({
            title: '发布成功',
            type: 'success',
            onClose() {
              browserHistory.push('/admin/events/list');
            }
          });
        }
      });
    }
  },
  deleteEvent({ Meteor }, event, id) {
    return ()=> {
      event.preventDefault();
      Meteor.call('events.delete', id, (err) => {
        if (err) {
          swal({
            title: '删除失败',
            text: err.message,
            type: 'error'
          });
        }
      });
    }
  }
};
