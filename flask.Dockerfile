FROM mcr.microsoft.com/mssql-tools AS mssql

FROM python:3.10-slim

COPY --from=mssql /opt/microsoft /opt/microsoft
COPY --from=mssql /etc/odbcinst.ini /etc/odbcinst.ini

RUN apt-get update && apt-get install -y \
    unixodbc \
    unixodbc-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 10000

CMD ["gunicorn", "-b", "0.0.0.0:10000", "router:app"]
