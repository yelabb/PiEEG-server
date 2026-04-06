FROM python:3.12-slim

WORKDIR /app

COPY pyproject.toml setup.sh LICENSE README.md ./
COPY pieeg_server/ pieeg_server/
COPY webhooks.json ./

RUN pip install --no-cache-dir .

EXPOSE 1616

CMD ["pieeg-server", "--mock", "--no-dashboard"]
