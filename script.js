

// --- [사용자가 수정할 부분] ---

const musicData = [
    // musicUrl에는 YouTube 영상 ID (예: 'J9_3hls2RNI')만 넣어야 합니다.
    { id: 'song1', x: 600, y: 300, titleUrl: 'https://i.imgur.com/2VnvYnd.png', musicUrl: 'J9_3hls2RNI', popupImageUrl: 'https://i.imgur.com/2VnvYnd.png' },
    { id: 'song2', x: 1100, y: 500, titleUrl: 'https://i.imgur.com/yuoBtHk.png', musicUrl: 'J9_3hls2RNI', popupImageUrl: 'https://i.imgur.com/yuoBtHk.png' },
    { id: 'song3', x: 1060, y: 1700, titleUrl: 'https://i.imgur.com/xdCf04u.png', musicUrl: 'J9_3hls2RNI', popupImageUrl: 'https://i.imgur.com/xdCf04u.png' },
    { id: 'song4', x: 750, y: 1600, titleUrl: 'https://i.imgur.com/XaKkgtV.png', musicUrl: 'J9_3hls2RNI', popupImageUrl: 'https://i.imgur.com/XaKkgtV.png' },
    { id: 'song5', x: 1200, y: 700, titleUrl: 'https://i.imgur.com/RvPiwCy.png', musicUrl: 'J9_3hls2RNI', popupImageUrl: 'https://i.imgur.com/RvPiwCy.png' },
    // **주의: 아래 영상 ID는 테스트용입니다. 실제 YouTube ID로 교체하세요.**
    { id: 'song6', x: 1340, y: 400, titleUrl: 'https://i.imgur.com/Hu82gDg.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://i.imgur.com/Hu82gDg.png' },
    { id: 'song7', x: 1100, y: 1300, titleUrl: 'https://i.imgur.com/jRmUZq1.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://i.imgur.com/jRmUZq1.png' },
    { id: 'song8', x: 1150, y: 600, titleUrl: 'https://i.imgur.com/EzEtIUh.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://i.imgur.com/EzEtIUh.png' },
    { id: 'song9', x: 1000, y: 1500, titleUrl: 'https://i.imgur.com/R8kJ9GF.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://i.imgur.com/R8kJ9GF.png' },
    { id: 'song10', x: 750, y: 600, titleUrl: 'https://i.imgur.com/XB8QeJg.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://i.imgur.com/XB8QeJg.png' },
    { id: 'song11', x: 1300, y: 250, titleUrl: 'https://i.imgur.com/TL7hh0N.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://i.imgur.com/TL7hh0N.png' },
    { id: 'song12', x: 1300, y: 1550, titleUrl: 'https://iimgur.com/P8tDNP9.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://iimgur.com/P8tDNP9.png' },
    { id: 'song13', x: 600, y: 1300, titleUrl: 'https://i.imgur.com/TNH59C0.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://i.imgur.com/TNH59C0.png' },
    { id: 'song14', x: 800, y: 400, titleUrl: 'https://i.imgur.com/7wLGVav.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://i.imgur.com/7wLGVav.png' },
    { id: 'song15', x: 850, y: 750, titleUrl: 'https://i.imgur.com/xj3CMOn.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://i.imgur.com/xj3CMOn.png' },
    { id: 'song16', x: 1200, y: 1000, titleUrl: 'https://i.imgur.com/Dp5v06V.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://i.imgur.com/Dp5v06V.png' },
    { id: 'song17', x: 1100, y: 1700, titleUrl: 'https://i.imgur.com/wxTb7u8.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://i.imgur.com/wxTb7u8.png' },
    { id: 'song18', x: 750, y: 1350, titleUrl: 'https://i.imgur.com/zfEIwub.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://iimgur.com/zfEIwub.png' },
    { id: 'song19', x: 500, y: 600, titleUrl: 'https://i.imgur.com/ascVMCF.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://iimgur.com/ascVMCF.png' },
    { id: 'song20', x: 500, y: 1700, titleUrl: 'https://i.imgur.com/bSCC7vh.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://iimgur.com/bSCC7vh.png' },
    { id: 'song21', x: 1250, y: 1250, titleUrl: 'https://i.imgur.com/kvlaM82.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://iimgur.com/kvlaM82.png' },
    { id: 'song22', x: 1250, y: 1250, titleUrl: 'https://i.imgur.com/tK1WEDB.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://i.imgur.com/your-song2-popup.jpg' },
    { id: 'song23', x: 1250, y: 1250, titleUrl: 'https://i.imgur.com/LbgKQZU.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://i.imgur.com/your-song2-popup.jpg' },
    { id: 'song24', x: 1250, y: 1250, titleUrl: 'https://i.imgur.com/u4HzxA7.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://i.imgur.com/your-song2-popup.jpg' },
    { id: 'song25', x: 1250, y: 1250, titleUrl: 'https://i.imgur.com/GyWuyUi.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://i.imgur.com/your-song2-popup.jpg' },
    { id: 'song26', x: 1250, y: 1250, titleUrl: 'https://i.imgur.com/necjdZ2.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://i.imgur.com/your-song2-popup.jpg' },
    { id: 'song27', x: 1250, y: 1250, titleUrl: 'https://i.imgur.com/RhyKg6Q.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://i.imgur.com/your-song2-popup.jpg' },
    { id: 'song28', x: 1250, y: 1250, titleUrl: 'https://i.imgur.com/ObdqFZZ.png', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://i.imgur.com/your-song2-popup.jpg' },
    { id: 'song29', x: 1250, y: 1250, titleUrl: '', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://i.imgur.com/your-song2-popup.jpg' },
    { id: 'song30', x: 1250, y: 1250, titleUrl: '', musicUrl: 'dQw4w9WgXcQ', popupImageUrl: 'https://iimgur.com/your-song2-popup.jpg' },
];

// --- [수정 완료] ---

let hideTimeout; // 깜빡임 방지용 전역 타이머

document.addEventListener('DOMContentLoaded', () => {
    const viewport = document.getElementById('viewport');
    const mapContainer = document.getElementById('map-container');
    const titleContainer = document.getElementById('title-container');
    const rulerX = document.getElementById('ruler-x');
    const rulerY = document.getElementById('ruler-y');
    const musicPopup = document.getElementById('music-popup');
    const popupImage = document.getElementById('popup-image');
    
    // **✅ 유튜브 영상을 삽입할 컨테이너를 정확히 지정**
    const videoPlayerDiv = document.getElementById('video-player'); 
    
    // 1. 음악 타이틀 이미지 배치 로직
    musicData.forEach(data => {
        const img = document.createElement('img');
        if (data.titleUrl) {
            img.src = data.titleUrl;
            img.className = 'music-title';
            img.id = data.id;
            img.style.left = `${data.x}px`;
            img.style.top = `${data.y}px`;
            titleContainer.appendChild(img);
        }
    });

    // 2. 동적 자(Ruler) 생성 기능
    let translateX = 0;
    let translateY = 0;
    let zoomLevel = 1;

    function generateRulers() {
        rulerX.innerHTML = '';
        rulerY.innerHTML = '';

        const viewportWidth = viewport.offsetWidth;
        const viewportHeight = viewport.offsetHeight;

        let currentRulerInterval = 100 * zoomLevel;
        let currentSubRulerInterval = 20 * zoomLevel;

        if (currentRulerInterval < 50) currentRulerInterval = 50;
        if (currentRulerInterval > 200) currentRulerInterval = 200;
            
        // --- 가로 자 (rulerX) 그리기 ---
        const mapXStart = -translateX / zoomLevel;  
        const mapXEnd = mapXStart + (viewportWidth / zoomLevel);

        let startGridX = Math.floor(mapXStart / currentRulerInterval) * currentRulerInterval;
        if (startGridX < mapXStart) startGridX += currentRulerInterval;

        for (let i = startGridX; i <= mapXEnd + currentRulerInterval; i += currentRulerInterval) {
            const screenX = (i * zoomLevel) + translateX;

            if (screenX >= 0 && screenX < viewportWidth) {
                const line = document.createElement('div');
                line.className = 'ruler-line-x major';
                line.style.left = `${screenX}px`;
                rulerX.appendChild(line);

                const number = document.createElement('div');
                number.className = 'ruler-number-x';
                number.style.left = `${screenX}px`;
                number.textContent = Math.round(i);
                rulerX.appendChild(number);

                for (let j = 1; j < currentRulerInterval / currentSubRulerInterval; j++) {
                    const subX = i + (j * currentSubRulerInterval);
                    const screenSubX = (subX * zoomLevel) + translateX;
                    if (screenSubX >= 0 && screenSubX < viewportWidth) {
                        const subLine = document.createElement('div');
                        subLine.className = 'ruler-line-x minor';
                        subLine.style.left = `${screenSubX}px`;
                        rulerX.appendChild(subLine);
                    }
                }
            }
        }

        // --- 세로 자 (rulerY) 그리기 ---
        const mapYStart = -translateY / zoomLevel;
        const mapYEnd = mapYStart + (viewportHeight / zoomLevel);
            
        let startGridY = Math.floor(mapYStart / currentRulerInterval) * currentRulerInterval;
        if (startGridY < mapYStart) startGridY += currentRulerInterval;

        for (let i = startGridY; i <= mapYEnd + currentRulerInterval; i += currentRulerInterval) {
            const screenY = (i * zoomLevel) + translateY;
            if (screenY >= 0 && screenY < viewportHeight) {
                const line = document.createElement('div');
                line.className = 'ruler-line-y major';
                line.style.top = `${screenY}px`;
                rulerY.appendChild(line);

                const number = document.createElement('div');
                number.className = 'ruler-number-y';
                number.style.top = `${screenY}px`;
                number.textContent = Math.round(i);
                rulerY.appendChild(number);

                for (let j = 1; j < currentRulerInterval / currentSubRulerInterval; j++) {
                    const subY = i + (j * currentSubRulerInterval);
                    const screenSubY = (subY * zoomLevel) + translateY;
                    if (screenSubY >= 0 && screenSubY < viewportHeight) {
                        const subLine = document.createElement('div');
                        subLine.className = 'ruler-line-y minor';
                        subLine.style.top = `${screenSubY}px`;
                        rulerY.appendChild(subLine);
                    }
                }
            }
        }
    }


    // 3. 호버 카드 (Hover Card) 열기 (mouseover)
    titleContainer.addEventListener('mouseover', (e) => {
        clearTimeout(hideTimeout);
        
        const target = e.target;
        if (target.classList.contains('music-title')) {
            const songId = target.id;
            const songData = musicData.find(song => song.id === songId);
            
            if (songData) {
                popupImage.src = songData.popupImageUrl;
                
                // --- 🎬 YouTube Player 삽입 및 자동 재생 ---
                const videoId = songData.musicUrl;
                if (videoId) {
                    // 👇👇👇 mute=0을 mute=1로 변경 (자동 재생 활성화) 👇👇👇
                    videoPlayerDiv.innerHTML = `
                        <iframe width="320" height="180" 
                            src="https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&mute=1&rel=0" 
                            frameborder="0" allow="autoplay; encrypted-media; fullscreen" >
                        </iframe>
                    `; 
                    // 👆👆👆 수정 완료 👆👆👆
                }
                musicPopup.classList.remove('hidden');
            }
        }
    });

    // 4. 호버 카드 (Hover Card) 닫기 (mouseout) - YouTube 정지 코드
    titleContainer.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('music-title')) {
            hideTimeout = setTimeout(() => {
                musicPopup.classList.add('hidden');
                videoPlayerDiv.innerHTML = ''; // iframe 제거하여 재생 중지
            }, 250); // 250ms 지연
        }
    });
    
    // **5. 팝업창 위에서 마우스 움직일 때 타이머 제어 (깜빡임 방지)**
    musicPopup.addEventListener('mouseover', () => {
        clearTimeout(hideTimeout);
    });

    musicPopup.addEventListener('mouseout', () => {
        hideTimeout = setTimeout(() => {
            musicPopup.classList.add('hidden');
            videoPlayerDiv.innerHTML = ''; // **✅ iframe을 제거하여 재생 중지**
        }, 250);
    });


    // 6. 마우스 트래커 기능 및 호버 카드 위치 실시간 업데이트
    const mouseX = document.getElementById('mouse-tracker-x');
    const mouseY = document.getElementById('mouse-tracker-y');
    const mouseBox = document.getElementById('mouse-tracker-box');

    document.addEventListener('mousemove', (e) => {
        // [마우스 트래커 로직]
        mouseX.style.top = `${e.clientY}px`;
        mouseY.style.left = `${e.clientX}px`;
        mouseBox.style.left = `${e.clientX}px`;
        mouseBox.style.top = `${e.clientY}px`;

        // [호버 카드 마우스 따라다니기 기능]
        if (!musicPopup.classList.contains('hidden')) {
            const cursorX = e.clientX;
            const cursorY = e.clientY;

            const popupWidth = musicPopup.offsetWidth;
            const popupHeight = musicPopup.offsetHeight;
            
            let targetX = cursorX + 15;
            let targetY = cursorY + 15;

            // 오른쪽 경계 보정: 화면을 벗어나면 커서의 왼쪽에 표시
            if (cursorX + 15 + popupWidth > viewport.offsetWidth) {
                targetX = cursorX - 15 - popupWidth;
            }
            // 아래쪽 경계 보정: 화면을 벗어나면 커서의 위에 표시
            if (cursorY + 15 + popupHeight > viewport.offsetHeight) {
                targetY = cursorY - 15 - popupHeight;
            }

            musicPopup.style.left = `${targetX}px`;
            musicPopup.style.top = `${targetY}px`;
        }
    });

    // 8. 확대/축소 및 이동 기능
    let isDragging = false;
    let startPointerX, startPointerY;
    let startTranslateX, startTranslateY;
    
    const initialTranslateX = (viewport.offsetWidth - mapContainer.offsetWidth) / 2;
    const initialTranslateY = (viewport.offsetHeight - mapContainer.offsetHeight) / 2;

    translateX = initialTranslateX;
    translateY = initialTranslateY;

    const minZoom = 0.6;
    const maxZoom = 4;
    const zoomStep = 0.07;
    
    // 줌/드래그/Transform 함수
    function updateTransform() {
        mapContainer.style.transform = `translate(${translateX}px, ${translateY}px) scale(${zoomLevel})`;
        generateRulers();
    }

    // 마우스 스크롤로 확대/축소
    viewport.addEventListener('wheel', (e) => {
        e.preventDefault();
        const oldZoomLevel = zoomLevel;
        const delta = Math.sign(e.deltaY);

        if (delta < 0) {
            if (zoomLevel < maxZoom) {
                zoomLevel = Math.min(maxZoom, zoomLevel + zoomStep);
            }
        } else {
            if (zoomLevel > minZoom) {
                zoomLevel = Math.max(minZoom, zoomLevel - zoomStep);
            }
        }

        const rect = mapContainer.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        translateX -= (offsetX / oldZoomLevel) * (zoomLevel - oldZoomLevel);
        translateY -= (offsetY / oldZoomLevel) * (zoomLevel - oldZoomLevel);
        
        updateTransform();
    });
    
    // 드래그 시작
    document.addEventListener('mousedown', (e) => {
        // 호버팝업 안에서 드래그를 막음
        if (e.target.classList.contains('music-title') || e.target.closest('#music-popup')) return; 
        if (e.target.closest('#map-container')) {
            isDragging = true;
            startPointerX = e.clientX;
            startPointerY = e.clientY;
            startTranslateX = translateX;
            startTranslateY = translateY;
            viewport.style.cursor = 'grabbing';
        }
    });
    
    // 드래그 중
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const dx = e.clientX - startPointerX;
        const dy = e.clientY - startPointerY;

        translateX = startTranslateX + (dx / zoomLevel);
        translateY = startTranslateY + (dy / zoomLevel);
        
        updateTransform();
    });

    // 드래그 끝
    document.addEventListener('mouseup', () => {
        isDragging = false;
        viewport.style.cursor = 'grab';
    });

    // 초기 로드 시 자와 지도를 업데이트
    updateTransform();
    viewport.style.cursor = 'grab';
});