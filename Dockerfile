FROM python:3.9

# Install necessary dependencies
RUN apt-get update && \
    apt-get install -y python3-distutils build-essential

# Install Django
RUN pip install django==3.2

# Copy project files
COPY . .


# Run migrations
RUN python manage.py migrate

# Expose port
EXPOSE 8000

# Command to run your application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
