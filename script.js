
class Stopwatch {
    constructor() {
        this.startTime = 0;
        this.elapsedTime = 0;
        this.lapTime = 0;
        this.lapCount = 0;
        this.isRunning = false;
        this.intervalId = null;
        
        // DOM elements
        this.timeDisplay = document.getElementById('time');
        this.startBtn = document.getElementById('startBtn');
        this.lapBtn = document.getElementById('lapBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.lapsList = document.getElementById('lapsList');
        this.themeToggle = document.getElementById('themeToggle');
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.updateDisplay();
        this.checkThemePreference();
    }
    
    bindEvents() {
        this.startBtn.addEventListener('click', () => this.toggle());
        this.lapBtn.addEventListener('click', () => this.recordLap());
        this.resetBtn.addEventListener('click', () => this.reset());
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }
    
    toggle() {
        if (this.isRunning) {
            this.stop();
        } else {
            this.start();
        }
    }
    
    start() {
        this.isRunning = true;
        this.startTime = Date.now() - this.elapsedTime;
        this.intervalId = setInterval(() => this.update(), 10);
        this.startBtn.textContent = 'Pause';
        this.lapBtn.disabled = false;
    }
    
    stop() {
        this.isRunning = false;
        clearInterval(this.intervalId);
        this.startBtn.textContent = 'Resume';
        this.lapBtn.disabled = true;
    }
    
    reset() {
        this.stop();
        this.elapsedTime = 0;
        this.lapTime = 0;
        this.lapCount = 0;
        this.lapsList.innerHTML = '';
        this.updateDisplay();
        this.startBtn.textContent = 'Start';
        this.lapBtn.disabled = true;
    }
    
    recordLap() {
        if (!this.isRunning) return;
        
        this.lapCount++;
        const currentTime = this.formatTime(this.elapsedTime);
        const lapElement = document.createElement('div');
        lapElement.className = 'lap-item';
        lapElement.innerHTML = `
            <span class="lap-number">Lap ${this.lapCount}</span>
            <span class="lap-time">${currentTime}</span>
        `;
        this.lapsList.prepend(lapElement);
    }
    
    update() {
        this.elapsedTime = Date.now() - this.startTime;
        this.updateDisplay();
    }
    
    updateDisplay() {
        this.timeDisplay.textContent = this.formatTime(this.elapsedTime);
    }
    
    formatTime(timeInMs) {
        const totalMs = timeInMs;
        const totalSeconds = Math.floor(totalMs / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const centiseconds = Math.floor((totalMs % 1000) / 10);
        
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
    }
    
    toggleTheme() {
        const isLight = document.body.classList.toggle('light-theme');
        this.themeToggle.textContent = isLight ? '☀️' : '🌙';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    }
    
    checkThemePreference() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            this.themeToggle.textContent = '☀️';
        }
    }
}

// Initialize the stopwatch when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Stopwatch();
});