FROM php:7.4-fpm

USER $user

# --------------------------------------
# Install dependencies
# --------------------------------------
RUN apt-get update && \
    apt-get install -y \
    build-essential \
    curl \
    git \
    iputils-ping \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libmagickwand-dev --no-install-recommends \
    libonig-dev \
    libpng-dev \
    libpq-dev \
    librabbitmq-dev \
    libssl-dev \
    libxml2-dev \
    libzip-dev \
    libpcsclite-dev \
    locales \
    openssl \
    procps \
    supervisor \
    unzip \
    vim \
    zip

# --------------------------------------
# Clear cache
# --------------------------------------
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# --------------------------------------
# Install extensions
# --------------------------------------
RUN pecl install -f amqp
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install sockets pdo pdo_pgsql zip gd
# --------------------------------------

# --------------------------------------
# Clear apt cache
# --------------------------------------
RUN apt-get clean && rm -rf /var/lib/apt/lists/*
# --------------------------------------

# --------------------------------------
# Install composer
# --------------------------------------
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# --------------------------------------
# Set default working directory
# --------------------------------------
WORKDIR "application"

# --------------------------------------
# Expose port 9000 and start php-fpm server
# --------------------------------------
EXPOSE 9000
CMD ["php-fpm"]