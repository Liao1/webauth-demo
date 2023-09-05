const burst = new mojs.Burst({
    parent: '#metamaskButton',
    radius: { 0: 100 },
    count: 20,
    children: {
        shape: 'cross',
        stroke: 'white',
        strokeWidth: { 6: 0 },
        angle: { 360: 0 },
        radius: { 30: 5 },
        duration: 3000
    }
});

function burstAnimation() {
    burst.replay();
}
