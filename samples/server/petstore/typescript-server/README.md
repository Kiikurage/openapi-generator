# typescript-server

TypeScript Server stub for [koa](https://github.com/koajs/koa) server.

## Requirements

- koa
- koa-router
- koa-bodyparser
- @types/koa
- @types/koa-router
- @types/koa-bodyparser

## Usage

1. Install required packages

    ```shell
    npm install --save koa koa-router koa-bodyparser
    npm install --save-dev @types/koa @types/koa-router @types/koa-bodyparser
    ```

2. Implement each controller interfaces defined in `/controllers` .

    ```typescript
    import { PetController } from 'generated_code_root';

    export class MyPetController implements PetController {
        // Your implementation
    }
    ```

3. Create `ApiRouter` instance with your controllers.

    ```typescript
    import { ApiRouter } from 'generated_code_root';

    const myPetController = new MyPetController();
    const myStoreController = new MyStoreController();
    const myUserController = new MyUserController();

    const apiRouter = new ApiRouter(
        myPetController,
        myStoreController,
        myUserController
    );

    const app = new Koa();

    app.use(apiRouter.middleware);

    app.listen(3000);
    ```
