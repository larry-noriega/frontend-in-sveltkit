# SvelteKit Front-end



## Desarrollo

Una vez que hayas creado un proyecto e instalado las dependencias con `npm install` (o `pnpm install` o `yarn`), inicia un servidor de desarrollo:

```bash
npm run dev

# o inicia el servidor y abre la aplicación en una nueva pestaña del navegador
npm run dev -- --open
```

## Mejoras

### Redirección desde la Página de Inicio al Flujo de Creación de Pagos

Para implementar la redirección desde la página de inicio al flujo de creación de pagos, asegúrate de que tu lógica de enrutamiento esté configurada correctamente en tu aplicación SvelteKit. Esto generalmente implica modificar el archivo `src/routes/index.svelte` para redirigir a los usuarios al flujo de pagos cuando accedan a la página de inicio.

> Para desplegar tu aplicación, es posible que necesites instalar un [adaptador](https://svelte.dev/docs/kit/adapters) para tu entorno de destino.

## Variables de Entorno

Para gestionar las variables de entorno, crea un archivo `.env` en la raíz de tu proyecto y agrega la siguiente línea:

```
VITE_REDIRECT_URL=http://localhost:4200/
```

Esta variable se puede utilizar en tu aplicación para manejar la lógica de redirección de manera dinámica.

--- 
