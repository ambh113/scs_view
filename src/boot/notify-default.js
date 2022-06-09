import { Notify } from 'quasar';

Notify.setDefaults({
    position: 'top',
    timeout: 5000,
    actions: [{ icon: 'close', color: 'white' }],
});