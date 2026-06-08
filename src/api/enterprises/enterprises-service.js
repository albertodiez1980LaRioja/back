const { BaseService } = require("../../shared/base/base-service");


class EnterpriseService extends BaseService {

}

exports.EnterpriseService = (repository) => new EnterpriseService(repository);