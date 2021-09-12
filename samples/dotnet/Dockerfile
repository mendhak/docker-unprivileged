# Build
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build-env
WORKDIR /app
COPY HelloApi/*.csproj ./
RUN dotnet restore
COPY HelloApi/ ./
RUN dotnet publish -c Release -o out

# Run
FROM mcr.microsoft.com/dotnet/aspnet:5.0-alpine

EXPOSE 3000

RUN addgroup --gid 1000 -S app && adduser --uid 1000 -S app -G app

USER app

WORKDIR /app

COPY --from=build-env --chown=app:app /app/out .

ENV ASPNETCORE_URLS=http://*:3000

CMD ["dotnet", "HelloApi.dll"]
