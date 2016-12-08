interface EntityDecoratorData<M> {
  entity: string;
  entityModel: { new(params?): M };
}

export function BackendResource<T>(data: EntityDecoratorData<T>): ClassDecorator {
  return function (target: Function) {
    target.prototype.entity = data.entity;
    target.prototype.entityModel = data.entityModel;

    return target;
  };
}