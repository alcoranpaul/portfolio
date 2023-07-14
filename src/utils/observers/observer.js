/*
 * File: observer.js
 * Project: portfolio
 * File Created: Wednesday, 21st June 2023 4:35:07 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 22nd June 2023 10:33:17 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */


class Observer {
    constructor() {
        this.subscribers = [];
    }

    subscribe(callback) {
        this.subscribers.push(callback);
    }

    unsubscribe(callback) {
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== callback);
    }

    notify(...args) {
        this.subscribers.forEach(callback => callback(...args));
    }
}

export default Observer;