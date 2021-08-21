const STEP_STATUS = Object.freeze({
    PASSED: {
        key: 'PASSED',
        text: 'Passed',
        value: 'PASSED',
    },
    CHECKING: {
        key: 'CHECKING',
        text: 'Checking...',
        value: 'CHECKING'
    },
    NOT_STARTED: {
        key: 'NOT_STARTED',
        text: 'Not Started',
        value: 'NOT_STARTED'
    }
});

export default STEP_STATUS;