import React, { useEffect, useRef } from 'react';
import './scss/Bg.scss';

const MASHTAB = 10
const STARS_KEF = 5
const Bg = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let stars = [];
        const numStars = STARS_KEF * (canvas.width / 2); // Количество звезд
        const speed = 5; // Скорость движения звезд

        // Список изображений звезд
        const starImages = [
            '/img/g1.png',
            '/img/g2.png',
            '/img/g3.png',
            '/img/g4.png',
        ];
        const loadedImages = [];

        // Загружаем все изображения из списка
        starImages.forEach((src) => {
            const img = new Image();
            img.src = src;
            loadedImages.push(img);
        });

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createStars = () => {
            stars = Array.from({ length: numStars }, () => ({
                x: (Math.random() * MASHTAB - MASHTAB / 2) * canvas.width,
                y: (Math.random() * MASHTAB - MASHTAB / 2) * canvas.height,
                z: Math.random() * canvas.width * MASHTAB * 3, // Глубина пространства
                size: Math.random() * 80 + 40, // Размер изображения звезды
                rotation: Math.random() * 360, // Случайный поворот звезды
                image: loadedImages[Math.floor(Math.random() * loadedImages.length)], // Случайное изображение
            }));
        };

        const updateStars = () => {
            stars.forEach((star) => {
                star.z -= speed;
                if (star.z <= 0) {
                    star.x = (Math.random() * MASHTAB - MASHTAB / 2) * canvas.width;
                    star.y = (Math.random() * MASHTAB - MASHTAB / 2) * canvas.height;
                    star.z = canvas.width * MASHTAB * 3; // Переместить звезду в дальнее пространство
                    star.rotation = Math.random() * 360; // Обновить поворот
                    star.image = loadedImages[Math.floor(Math.random() * loadedImages.length)]; // Обновить изображение
                }
            });
        };

        const drawStars = () => {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Сортируем звезды по z в порядке убывания
            stars.sort((a, b) => b.z - a.z);

            stars.forEach((star) => {
                const x = (star.x - canvas.width / 2) * (canvas.width / star.z) + canvas.width / 2;
                const y = (star.y - canvas.height / 2) * (canvas.width / star.z) + canvas.height / 2;
                const size = star.size / (star.z / canvas.width);

                ctx.save();
                ctx.translate(x, y);
                ctx.rotate((star.rotation * Math.PI) / 180); // Применяем поворот
                ctx.drawImage(star.image, -size / 2, -size / 2, size, size); // Рисуем изображение
                ctx.restore();
            });
        };

        const animate = () => {
            if (loadedImages.every((img) => img.complete)) { // Ждем загрузки всех изображений
                updateStars();
                drawStars();
            }
            requestAnimationFrame(animate);
        };

        resizeCanvas();
        createStars();
        animate();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <div className='Bg'>
            <canvas ref={canvasRef} className="Bg"></canvas>
        </div>
    );
};

export default Bg;
