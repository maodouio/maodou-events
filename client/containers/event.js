import { useDeps } from 'react-simple-di';
import { compose, withHandlers, withTracker, withRedux, withLifecycle, composeAll } from 'react-komposer-plus';
import { browserHistory } from 'react-router'

import Post from '../components/event';

const lifecycle=({
  componentWillReceiveProps(nextProps) {
    if (nextProps.event) {
      document.title = nextProps.event.title;
    }
  }
});

const initData = ({ context, params }, onData) => {
  const { Meteor, swal } = context;
  const eventId = params.id;
  Meteor.call('events.get.single', eventId, (err, event) => {
    if (err) {
      if (err.error === '404'){
        swal({
          title: "Event Not Found",
          text: "Jumping to event list",
          type: "error"
        });
        browserHistory.push('/events');
      }
    } else {
      onData(null, { event });
    }
  });
  onData(null, {});
};

const depsToProps = (context, actions) => ({
  context
});

export default composeAll(
  withLifecycle(lifecycle),
  compose(initData),
  useDeps(depsToProps)
)(Post);
