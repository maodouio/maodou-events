import collections from '../lib/collections';
import permissions from './permissions';
import publications from './publications';
import methods from './methods';
import configs from 'lib/configs/events';
import privateConfigs from 'server/configs/events';

export default {
  configs,
  privateConfigs,
  collections,
  permissions,
  publications,
  methods,
  init(context) {
    const { Collections } = context;
    if (!Collections.Packages.findOne({ name: 'events' })) {
      Collections.Packages.insert({
        name: 'events',
        configs: context.configs.events || {}
      });
    }
    if (Collections.Events.find().count() < 4) {
      Collections.Events.insert({
        title: 'Relay: State of the State',
        coverUrl: 'http://odhge55gv.bkt.clouddn.com/FvY1XBtXxegqJh2fF-o0GGpksAn5',
        desc: 'This month marks a year since we released Relay and we\'d like to share an update on the project and what\'s next.',
        time: new Date(2016,11,12),
        location: 'Google',
        limit: '123',
        fee: '20',
        unit: 'dollar'
      });
      Collections.Events.insert({
        title: 'A Year In Review',
        coverUrl: 'http://odhge55gv.bkt.clouddn.com/FvY1XBtXxegqJh2fF-o0GGpksAn5',
        desc: 'This month marks a year since we released Relay and we\'d like to share an update on the project and what\'s next.',
        time: new Date(2016,10,6),
        location: 'Facebook',
        limit: '123',
        fee: '30',
        unit: 'dollar'
      });
      Collections.Events.insert({
        title: 'Retrospective & Roadmap',
        coverUrl: 'http://odhge55gv.bkt.clouddn.com/FvY1XBtXxegqJh2fF-o0GGpksAn5',
        desc: 'This month marks a year since we released Relay and we\'d like to share an update on the project and what\'s next.',
        time: new Date(2016,12,2),
        location: 'Apple',
        limit: '123',
        fee: '200',
        unit: 'dollar'
      });
      Collections.Events.insert({
        title: 'Empowering the Community',
        coverUrl: 'http://odhge55gv.bkt.clouddn.com/FvY1XBtXxegqJh2fF-o0GGpksAn5',
        desc: 'This month marks a year since we released Relay and we\'d like to share an update on the project and what\'s next.',
        time: new Date(2016,9,22),
        location: 'LinkedIn',
        limit: '123',
        fee: '123',
        unit: 'dollar'
      });
    }
  }
};
