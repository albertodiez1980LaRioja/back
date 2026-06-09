import BaseRepository from '../../shared/base/base-repository.js';

class UserRepository extends BaseRepository {
    read = async function (user_name, scope) {
        try {
            const object = { where: { user_name: user_name.username } };
            const user = await this.model.findOne(object);
            return user;
        } catch (err) {
            console.log('Error on get user');
        }
        return undefined;
    }
}

export default UserRepository;