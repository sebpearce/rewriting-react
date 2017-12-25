import { Component } from './Component';
import Counter from './Counter';
import { createDiv, createText } from './CreateElement';

const walrus = new Counter(document.body, {defaultCount: 5});

// const counters = Array.from(document.querySelectorAll('[data-counter]'));
// counters.map(counter => new Counter(counter, JSON.parse(counter.dataset.counter)))
