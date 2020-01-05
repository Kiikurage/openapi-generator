import Router from 'koa-router';
import { PetController, PetRouter } from './PetApi';
import { StoreController, StoreRouter } from './StoreApi';
import { UserController, UserRouter } from './UserApi';


export * from './PetApi';
export * from './StoreApi';
export * from './UserApi';

export function ApiRouter(
    petController: PetController,
    storeController: StoreController,
    userController: UserController
) {
    const router = new Router();

    router.use(PetRouter(petController).routes());
    router.use(StoreRouter(storeController).routes());
    router.use(UserRouter(userController).routes());

    return router;
}
