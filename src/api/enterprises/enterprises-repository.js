const { BaseRepository } = require("../../shared/base/base-repository");

class EnterpriseRepository extends BaseRepository {

}

exports.EnterpriseRepository = (model) => new EnterpriseRepository(model); 